import { motion } from "framer-motion";
import { Mail, Phone, Github, Sparkles, Code, Brain } from "lucide-react";
import { SuggestedActions } from "./suggested-actions";
import { useActiveChat } from "@/hooks/use-active-chat";

export const Greeting = () => {
  const { chatId, visibilityType, sendMessage } = useActiveChat();

  return (
    <div className="pointer-events-auto flex flex-col items-center max-w-2xl px-6 py-8 mx-auto text-center" key="overview">
      {/* Animated Icon Header */}
      <motion.div
        animate={{ scale: 1, rotate: 0 }}
        initial={{ scale: 0.8, rotate: -10 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative flex items-center justify-center w-20 h-20 mb-6 rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/20"
      >
        <span className="text-3xl font-extrabold text-white">M</span>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          className="absolute -top-1 -right-1 p-1 bg-white dark:bg-zinc-800 rounded-full shadow-md"
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
        </motion.div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-clip-text bg-linear-to-r from-foreground via-foreground/90 to-muted-foreground"
      >
        Mukesh's AI Assistant
      </motion.h1>

      {/* Bio / Description */}
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md mt-3 text-sm leading-relaxed text-muted-foreground/90"
      >
        Hi! I'm an AI assistant trained to showcase the work, skills, and portfolio of <strong>PODUGU MUKESH</strong>. Feel free to ask me anything about him, or explore other topics!
      </motion.p>

      {/* Developer Card - Glassmorphism */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full mt-8 p-6 rounded-2xl border border-border/50 bg-card/45 backdrop-blur-xl shadow-md text-left"
      >
        <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">PODUGU MUKESH</h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
              <Code className="w-3.5 h-3.5 text-indigo-500" /> Full-Stack & AI Engineer
            </p>
          </div>
          <span className="px-2.5 py-1 text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Available for Hire
          </span>
        </div>

        {/* Contact list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:mukeshpodugu123@gmail.com"
            className="flex items-center gap-3 p-3 rounded-xl border border-border/30 bg-muted/20 hover:bg-muted/50 hover:border-indigo-500/30 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Email Me</p>
              <p className="text-xs text-foreground font-medium truncate group-hover:text-indigo-500 transition-colors">
                mukeshpodugu123@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:8143999463"
            className="flex items-center gap-3 p-3 rounded-xl border border-border/30 bg-muted/20 hover:bg-muted/50 hover:border-indigo-500/30 transition-all duration-200 group"
          >
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500 dark:text-purple-400">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Call Me</p>
              <p className="text-xs text-foreground font-medium group-hover:text-purple-500 transition-colors">
                8143999463
              </p>
            </div>
          </a>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Brain className="w-3.5 h-3.5 text-purple-500" /> Powered by Gemini & AI SDK
          </span>
          <a
            href="https://github.com/mukeshpodugu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-foreground hover:text-indigo-500 transition-colors"
          >
            <Github className="w-4 h-4" /> github.com/mukeshpodugu
          </a>
        </div>
      </motion.div>

      {/* Suggested Actions - aligned nicely below the details card */}
      <div className="w-full mt-10">
        <p className="text-xs font-semibold text-muted-foreground/75 uppercase tracking-wider text-left mb-3 pl-1">
          Suggested Questions
        </p>
        <SuggestedActions
          chatId={chatId}
          selectedVisibilityType={visibilityType}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
