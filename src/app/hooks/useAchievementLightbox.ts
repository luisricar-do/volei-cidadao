import { useCallback, useEffect, useRef, useState } from "react";
import type { Achievement } from "@/app/config";

/** Margem sobre `duration-200` do Dialog para limpar o item após a animação de fechamento. */
const RESET_ITEM_AFTER_MS = 250;

/**
 * Mantém o item selecionado durante a animação de saída do Dialog, evitando desmontar
 * o `ImageLightbox` antes do Radix concluir a transição.
 */
export function useAchievementLightbox() {
  const [item, setItem] = useState<Achievement | null>(null);
  const [open, setOpen] = useState(false);
  const resetAfterCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResetTimer = useCallback(() => {
    if (resetAfterCloseRef.current) {
      clearTimeout(resetAfterCloseRef.current);
      resetAfterCloseRef.current = null;
    }
  }, []);

  const openLightbox = useCallback(
    (achievement: Achievement) => {
      clearResetTimer();
      setItem(achievement);
      setOpen(true);
    },
    [clearResetTimer]
  );

  const onOpenChange = useCallback(
    (next: boolean) => {
      if (next) {
        setOpen(true);
        return;
      }
      setOpen(false);
      clearResetTimer();
      resetAfterCloseRef.current = setTimeout(() => {
        setItem(null);
        resetAfterCloseRef.current = null;
      }, RESET_ITEM_AFTER_MS);
    },
    [clearResetTimer]
  );

  useEffect(() => () => clearResetTimer(), [clearResetTimer]);

  return { item, open, openLightbox, onOpenChange };
}
