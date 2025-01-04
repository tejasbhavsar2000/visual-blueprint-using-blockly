import React, { useState } from "react";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import py from "react-syntax-highlighter/dist/esm/languages/hljs/python";

import { Copy } from "lucide-react";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useLangStore } from "./Store.js";

export default function Code() {
  SyntaxHighlighter.registerLanguage("javascript", js);
  SyntaxHighlighter.registerLanguage("python", py);
  const { javascript, python } = useLangStore((state) => state);
  const [lang, setLang] = useState("javascript");
  const { theme } = useTheme;

  return (
    <div className="p-4 w-full h-full flex flex-col gap-2">
      <div className="flex gap-2">
        <Select
          defaultValue="javascript"
          onValueChange={(value) => {
            setLang(value);
          }}
        >
          <SelectTrigger className="p-2 text-lg font-semibold">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="javascript">Javascript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
          </SelectContent>
        </Select>
        <CopyButton lang={lang} />
      </div>

      <SyntaxHighlighter
        language={lang}
        style={theme != "light" ? a11yDark : a11yLight}
        showLineNumbers={true}
        className="h-[90%]"
        name="code"
      >
        {lang === "javascript" ? javascript : python}
      </SyntaxHighlighter>
    </div>
  );
}

function CopyButton({ lang }) {
  return (
    <Button
      className=" w-fit"
      id="copy"
      onClick={() => {
        const code = useLangStore.getState();
        navigator.clipboard.writeText(code[lang]);
        toast.success("Successfully Copied!!");
      }}
    >
      <Copy />
    </Button>
  );
}
