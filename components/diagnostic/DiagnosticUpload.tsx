"use client";

import { useState, useRef, useCallback, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type UploadState = "idle" | "dragover" | "uploading" | "complete" | "error";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export default function DiagnosticUpload() {
  const [state, setState] = useState<UploadState>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  const validate = useCallback((file: File): string | null => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Please upload a JPG, PNG, or WebP image.";
    }
    if (file.size > MAX_SIZE_BYTES) {
      return `File size must be under ${MAX_SIZE_MB}MB.`;
    }
    return null;
  }, []);

  const processFile = useCallback(
    (file: File) => {
      const validationError = validate(file);
      if (validationError) {
        setError(validationError);
        setState("error");
        return;
      }

      setError(null);
      setState("uploading");
      setProgress(0);

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Simulated upload progress
      let current = 0;
      const interval = setInterval(() => {
        current += Math.random() * 25;
        if (current >= 100) {
          current = 100;
          clearInterval(interval);
          setProgress(100);
          setState("complete");
        } else {
          setProgress(Math.round(current));
        }
      }, 300);
    },
    [validate]
  );

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setState("idle");
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setState("dragover");
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setState("idle");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  }

  function reset() {
    setState("idle");
    setPreview(null);
    setError(null);
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => state !== "uploading" && inputRef.current?.click()}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && state !== "uploading") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Upload a photo for skin diagnostic analysis"
        className={cn(
          "relative flex flex-col items-center justify-center rounded-sm border-2 border-dashed p-12 lg:p-16 cursor-pointer transition-all",
          state === "idle" && "border-border hover:border-primary/50 bg-surface",
          state === "dragover" && "border-primary bg-primary-light scale-[1.01]",
          state === "uploading" && "border-silver bg-surface-muted cursor-wait",
          state === "complete" && "border-primary bg-primary-light",
          state === "error" && "border-red-400 bg-red-50"
        )}
        style={{
          transitionDuration: "var(--duration-fast)",
          transitionTimingFunction: "var(--ease-subtle)",
        }}
      >
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleChange}
          className="sr-only"
          aria-describedby={`${inputId}-help`}
        />

        <AnimatePresence mode="wait">
          {state === "complete" && preview ? (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src={preview}
                  alt="Uploaded photo preview"
                  fill
                  className="object-cover"
                />
              </div>
              <CheckCircle className="h-8 w-8 text-primary" />
              <p className="text-body font-medium text-secondary text-center">
                Image captured successfully
              </p>
              <p className="text-caption text-text-muted text-center">
                Skin diagnostic analysis initializing...
              </p>

              {/* Skeleton analysis placeholder */}
              <div className="w-full mt-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-3 bg-silver-light rounded-full animate-pulse"
                    style={{
                      width: `${100 - i * 15}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  reset();
                }}
                className="mt-2 text-caption font-medium tracking-[0.04em] uppercase text-text-muted hover:text-primary transition-colors"
                style={{ transitionDuration: "var(--duration-fast)" }}
              >
                Upload another
              </button>
            </motion.div>
          ) : state === "uploading" ? (
            <motion.div
              key="uploading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6 w-full"
            >
              <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-body text-text-muted">
                Processing image...
              </p>
              <div className="w-full max-w-xs bg-silver-light rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              <span className="text-caption text-text-muted">{progress}%</span>
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-5"
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
                  state === "error" ? "bg-red-100" : "bg-surface-muted"
                )}
              >
                {state === "error" ? (
                  <AlertCircle className="h-7 w-7 text-red-500" />
                ) : (
                  <Upload className="h-7 w-7 text-text-muted" />
                )}
              </div>

              {state === "error" && error ? (
                <p className="text-body font-medium text-red-600 text-center">
                  {error}
                </p>
              ) : (
                <>
                  <p className="text-body font-medium text-secondary text-center">
                    Upload your photo
                  </p>
                  <p
                    id={`${inputId}-help`}
                    className="text-caption text-text-muted text-center max-w-xs"
                  >
                    Natural light. No makeup. Front-facing. Clear image. JPG, PNG, or WebP &middot; Max {MAX_SIZE_MB}MB
                  </p>
                </>
              )}

              <span className="inline-flex items-center h-11 px-7 bg-surface-muted text-[0.8125rem] font-medium tracking-[0.04em] uppercase text-secondary hover:bg-primary hover:text-white transition-colors rounded-sm"
                style={{ transitionDuration: "var(--duration-fast)" }}
              >
                {state === "error" ? "Try Again" : "Begin My Analysis"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
