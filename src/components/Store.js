import { create } from "zustand";

const useXmlStore = create((set) => ({
  xml: "",
  setXML: () => set((state) => ({ xml: state.xml })),
}));

const useLangStore = create((set) => ({
  javascript: "",
  python: "",
  setLang: () =>
    set((state) => ({ javascript: state.javascript, python: state.python })),
}));

export { useLangStore };
export default useXmlStore;
