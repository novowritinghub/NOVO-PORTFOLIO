import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  RefreshCw, 
  MessageCircle, 
  Mail, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Bot,
  User,
  Star,
  CheckCircle2
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA, FAQ_DATA } from '../data/content';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: Array<{ label: string; action: string; payload?: string }>;
  links?: Array<{ text: string; url: string; external?: boolean }>;
  timestamp: string;
}

export default function NovoChatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(1);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [wizardStep, setWizardStep] = useState<'idle' | 'service_select' | 'details_input' | 'completed'>('idle');
  const [selectedService, setSelectedService] = useState<string>('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const initialBotMessage: Message = {
    id: 'welcome-1',
    sender: 'bot',
    text: `Hello! 👋 Welcome to **${BRAND_INFO.name}**.\nI'm your digital assistant. How can I help you today?`,
    options: [
      { label: "⚡ Request a Project Quote", action: "start_wizard" },
      { label: "🛠️ Explore Digital Services", action: "explore_services" },
      { label: "📞 Get Contact & WhatsApp Info", action: "show_contact" },
      { label: "⭐ View Reviews & Fiverr Profile", action: "show_reviews" },
      { label: "❓ Frequently Asked Questions", action: "show_faq" }
    ],
    timestamp: getTimestamp()
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const handleReset = () => {
    setMessages([initialBotMessage]);
    setWizardStep('idle');
    setSelectedService('');
    setInput('');
  };

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handleOptionClick = (option: { label: string; action: string; payload?: string }) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
      timestamp: getTimestamp()
    };
    addMessage(userMsg);
    processAction(option.action, option.payload);
  };

  const handleSendInput = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: getTimestamp()
    };
    addMessage(userMsg);
    setInput('');

    if (wizardStep === 'details_input') {
      finishWizardWithDetails(query);
    } else {
      processUserTextQuery(query);
    }
  };

  const processAction = (action: string, payload?: string) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (action === 'start_wizard') {
        setWizardStep('service_select');
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Great! What type of digital project would you like to start?",
          options: SERVICES_DATA.map((s) => ({
            label: s.title,
            action: 'select_service',
            payload: s.title
          })),
          timestamp: getTimestamp()
        });
      } else if (action === 'select_service' && payload) {
        setSelectedService(payload);
        setWizardStep('details_input');
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Selected: **${payload}**.\n\nPlease type a short description of your project or requirements below (e.g., timeline, key features, or goals).`,
          timestamp: getTimestamp()
        });
      } else if (action === 'explore_services') {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `We offer custom digital solutions across modern web development, presentation design, and technical support:\n\n` +
            `• **Website Development** (Portfolios, Business Sites, Web Apps)\n` +
            `• **Presentation Design** (Microsoft PowerPoint Slide Decks)\n` +
            `• **Project Documentation** (Technical User Guides & Manuals)\n` +
            `• **Maintenance & Support** (DNS, Hosting, Updates)`,
          options: [
            { label: "⚡ Request Quote for a Service", action: "start_wizard" },
            { label: "📄 View All Services Page", action: "goto_services_page" }
          ],
          links: [
            { text: "Open Full Services Page", url: "/services" }
          ],
          timestamp: getTimestamp()
        });
      } else if (action === 'show_contact') {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Here are the official contact details for **NOVO WRITING HUB** (Anand Krishnan):\n\n` +
            `📱 **Phone**: +91 ${BRAND_INFO.contact.phone}\n` +
            `💬 **WhatsApp**: +91 ${BRAND_INFO.contact.whatsapp}\n` +
            `✉️ **Email**: ${BRAND_INFO.contact.email}\n` +
            `📍 **Location**: ${BRAND_INFO.contact.location}`,
          links: [
            { text: "💬 Chat on WhatsApp", url: BRAND_INFO.contact.whatsappLink, external: true },
            { text: "✉️ Send Email", url: BRAND_INFO.contact.emailLink, external: true },
            { text: "📄 Open Contact Page", url: "/contact" }
          ],
          timestamp: getTimestamp()
        });
      } else if (action === 'show_reviews') {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Explore our official platforms and client reviews:\n\n` +
            `⭐ **Google Business Profile**: Verified reviews & ratings\n` +
            `💼 **Fiverr Profile**: Verified seller (@novowritinghub)\n` +
            `📸 **Instagram**: @novo_writing_hub`,
          links: [
            { text: "⭐ Google Reviews", url: "https://g.page/r/CX-rN80lscTGEBM/review", external: true },
            { text: "💼 Fiverr Profile", url: BRAND_INFO.fiverr.profileUrlPlaceholder, external: true },
            { text: "📸 Instagram", url: BRAND_INFO.instagram.profileUrl, external: true }
          ],
          timestamp: getTimestamp()
        });
      } else if (action === 'show_faq') {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Here are quick answers to common client questions:\n\n` +
            `• **Custom Sites**: Yes, custom coded with React, Python, HTML/CSS.\n` +
            `• **Revisions**: Dedicated revision rounds included with all deliverables.\n` +
            `• **Turnaround**: Standard websites take a few days; briefs are scheduled by milestones.\n` +
            `• **Location**: Based in Thanjavur, serving global & local clients.`,
          options: [
            { label: "⚡ Request a Quote", action: "start_wizard" },
            { label: "📄 Read Full FAQ Page", action: "goto_faq_page" }
          ],
          links: [
            { text: "View FAQ Page", url: "/faq" }
          ],
          timestamp: getTimestamp()
        });
      } else if (action === 'goto_services_page') {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Click below to open the dedicated Services Page.",
          links: [{ text: "Go to Services Page", url: "/services" }],
          timestamp: getTimestamp()
        });
      } else if (action === 'goto_faq_page') {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Click below to visit our full FAQ Page.",
          links: [{ text: "Go to FAQ Page", url: "/faq" }],
          timestamp: getTimestamp()
        });
      }
    }, 400);
  };

  const finishWizardWithDetails = (details: string) => {
    setIsTyping(true);
    setWizardStep('completed');

    const formattedWhatsAppText = encodeURIComponent(
      `Hello NOVO WRITING HUB! I want to start a project.\n\n` +
      `*Service Required:* ${selectedService || 'Digital Services'}\n` +
      `*Details:* ${details}\n\n` +
      `Please provide estimated quote and timeline.`
    );

    const waLink = `https://wa.me/917540072112?text=${formattedWhatsAppText}`;
    const emailLink = `mailto:novowritinghub@gmail.com?subject=${encodeURIComponent(`Project Inquiry - ${selectedService}`)}&body=${encodeURIComponent(details)}`;

    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `Thank you! I've summarized your project request:\n\n` +
          `🎯 **Service**: ${selectedService || 'Digital Services'}\n` +
          `📝 **Brief**: "${details}"\n\n` +
          `Send this brief directly via WhatsApp or Email to connect with Anand Krishnan:`,
        links: [
          { text: "🟢 Send via WhatsApp (+91 7540072112)", url: waLink, external: true },
          { text: "✉️ Send via Email", url: emailLink, external: true },
          { text: "📄 Open Enquiry Form on Contact Page", url: "/contact" }
        ],
        options: [
          { label: "🔄 Start Another Quote", action: "start_wizard" }
        ],
        timestamp: getTimestamp()
      });
    }, 400);
  };

  const processUserTextQuery = (rawQuery: string) => {
    const q = rawQuery.toLowerCase();
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      if (q.includes('quote') || q.includes('start') || q.includes('price') || q.includes('cost') || q.includes('hire')) {
        setWizardStep('service_select');
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "I can help you get a project quote right away! Which service do you need?",
          options: SERVICES_DATA.map((s) => ({
            label: s.title,
            action: 'select_service',
            payload: s.title
          })),
          timestamp: getTimestamp()
        });
      } else if (q.includes('contact') || q.includes('whatsapp') || q.includes('phone') || q.includes('email') || q.includes('location') || q.includes('number')) {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `**NOVO WRITING HUB Official Contact:**\n\n` +
            `• **Phone & WhatsApp**: +91 ${BRAND_INFO.contact.phone}\n` +
            `• **Email**: ${BRAND_INFO.contact.email}\n` +
            `• **Location**: ${BRAND_INFO.contact.location}`,
          links: [
            { text: "💬 Chat on WhatsApp", url: BRAND_INFO.contact.whatsappLink, external: true },
            { text: "✉️ Send Email", url: BRAND_INFO.contact.emailLink, external: true }
          ],
          timestamp: getTimestamp()
        });
      } else if (q.includes('service') || q.includes('web') || q.includes('ppt') || q.includes('powerpoint') || q.includes('doc')) {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "We specialize in Custom Web Development, Portfolio Sites, Business Portals, PowerPoint Slide Design, Technical Documentation, and Site Maintenance.",
          options: [
            { label: "⚡ Request a Quote", action: "start_wizard" },
            { label: "🛠️ Explore All Services", action: "explore_services" }
          ],
          timestamp: getTimestamp()
        });
      } else if (q.includes('fiverr') || q.includes('review') || q.includes('rating') || q.includes('instagram')) {
        addMessage({
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Check out our verified client reviews and profiles online:",
          links: [
            { text: "⭐ Google Reviews", url: "https://g.page/r/CX-rN80lscTGEBM/review", external: true },
            { text: "💼 Fiverr Profile", url: BRAND_INFO.fiverr.profileUrlPlaceholder, external: true },
            { text: "📸 Instagram", url: BRAND_INFO.instagram.profileUrl, external: true }
          ],
          timestamp: getTimestamp()
        });
      } else {
        // Find matching FAQ item if any
        const matchedFaq = FAQ_DATA.find((f) => 
          f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
        );

        if (matchedFaq) {
          addMessage({
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `**${matchedFaq.question}**\n\n${matchedFaq.answer}`,
            options: [
              { label: "⚡ Request Project Quote", action: "start_wizard" },
              { label: "📞 Contact Anand Krishnan", action: "show_contact" }
            ],
            timestamp: getTimestamp()
          });
        } else {
          addMessage({
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `I'd be glad to help with "${rawQuery}". You can choose an option below or chat directly with Anand Krishnan on WhatsApp (+91 7540072112).`,
            options: [
              { label: "⚡ Start a Project Quote", action: "start_wizard" },
              { label: "📞 View Contact Info", action: "show_contact" },
              { label: "🛠️ Explore Services", action: "explore_services" }
            ],
            links: [
              { text: "💬 Direct WhatsApp Chat", url: BRAND_INFO.contact.whatsappLink, external: true }
            ],
            timestamp: getTimestamp()
          });
        }
      }
    }, 400);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && unreadCount > 0 && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-500/40 text-slate-800 text-xs font-semibold shadow-lg animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Need a project quote? Chat with NOVO!</span>
          </div>
        )}
        <button
          onClick={toggleChat}
          aria-label="Toggle NOVO Chatbot"
          className="relative group w-14 h-14 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center border-2 border-amber-300"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 text-white group-hover:rotate-6 transition-transform" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* Expandable Chatbot Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[82vh] bg-white border border-slate-200/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header Bar */}
          <div className="bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-amber-500/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/assets/novo-logo.jpg"
                  alt="NOVO Logo"
                  className="w-9 h-9 rounded-lg object-contain bg-slate-950 border border-amber-500/40 p-0.5"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading text-sm font-bold text-white tracking-wide">
                    NOVO Assistant
                  </h3>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span>Digital Services & Support</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart Chat"
                className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChat}
                title="Close Chat"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-amber-700" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2`}>
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-amber-600 text-white rounded-br-none font-medium'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">
                      {msg.text.split('\n').map((line, idx) => (
                        <p key={idx} className={idx > 0 ? 'mt-1' : ''}>
                          {line.startsWith('• ') ? (
                            <span className="font-medium text-slate-900">{line}</span>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>

                    <div className={`text-[9px] mt-1.5 text-right font-mono ${msg.sender === 'user' ? 'text-amber-200' : 'text-slate-400'}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* Suggestion Option Chips */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="text-left text-[11px] font-medium px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-900 border border-slate-200 hover:border-amber-400 transition-all duration-200 shadow-2xs flex items-center justify-between gap-1 group"
                        >
                          <span>{opt.label}</span>
                          <ChevronRight className="w-3 h-3 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Direct Link Buttons */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-col gap-1.5 pt-1">
                      {msg.links.map((link, i) => 
                        link.external ? (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-800 transition-colors inline-flex items-center justify-between gap-2 shadow-2xs"
                          >
                            <span>{link.text}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                          </a>
                        ) : (
                          <Link
                            key={i}
                            to={link.url}
                            onClick={() => setIsOpen(false)}
                            className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 border border-amber-500/30 transition-colors inline-flex items-center justify-between gap-2 shadow-2xs"
                          >
                            <span>{link.text}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-amber-700" />
                </div>
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none text-slate-400 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-150" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-300" />
                  <span className="ml-1 text-[10px] font-mono">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Category Action Footer */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[10px] font-medium text-slate-600">
            <span className="shrink-0 text-amber-700 font-bold font-mono">Quick:</span>
            <button
              onClick={() => processAction('start_wizard')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 hover:bg-amber-500/20 transition-colors font-semibold"
            >
              ⚡ Quote Wizard
            </button>
            <button
              onClick={() => processAction('show_contact')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              💬 WhatsApp
            </button>
            <button
              onClick={() => processAction('show_reviews')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              ⭐ Reviews
            </button>
          </div>

          {/* Input Form Bar */}
          <form onSubmit={handleSendInput} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={wizardStep === 'details_input' ? "Type project brief / details..." : "Ask a question or request a service..."}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-amber-600 text-white disabled:opacity-40 hover:bg-amber-700 transition-colors shrink-0 shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
