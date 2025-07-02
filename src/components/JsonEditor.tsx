import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";

import type { FC } from "react";

const highlight = (code: string): string =>
  Prism.highlight(code, Prism.languages.json, "json");

interface JsonEditorProps {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const JsonEditor: FC<JsonEditorProps> = ({ label, value, error, onChange }) => (
  <div className="pt-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="border border-gray-300 overflow-auto max-h-[88vh]">
      <Editor
        value={value}
        onValueChange={onChange}
        highlight={highlight}
        padding={10}
        className="w-full text-sm font-mono bg-white"
      />
    </div>
    {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}
  </div>
);

export default JsonEditor;
