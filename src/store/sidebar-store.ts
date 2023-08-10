import { create } from 'zustand';

interface DrawerStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDrawerStore = create<DrawerStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

interface SidebarStore {
  isCollapsed: boolean;
  onCollapse: (isCollapsed: boolean) => void;
  onExpand: () => void;
}

export const useSidebarStore = create<SidebarStore>(set => ({
  isCollapsed: false,
  onCollapse: (isCollapsed: boolean) => set({ isCollapsed }),
  onExpand: () => set({ isCollapsed: false })
}));
