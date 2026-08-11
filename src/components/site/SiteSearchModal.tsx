import { SiteInlineSearch } from "./SiteInlineSearch";

export interface SiteSearchModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function SiteSearchModal({ isOpen, onClose }: SiteSearchModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
        <SiteInlineSearch />
      </div>
    </div>
  );
}
