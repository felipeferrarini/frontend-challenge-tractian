import { useIsMobile } from '@/hooks';
import { useDrawerStore } from '@/store';
import { Drawer } from 'antd';
import { NavbarMenu } from './navbar-menu';

export const Navbar = (): JSX.Element => {
  const isMobile = useIsMobile();
  const { isOpen, onClose } = useDrawerStore();

  if (isMobile) {
    return (
      <Drawer
        title="TRACTIAN"
        placement="left"
        bodyStyle={{ padding: 16 }}
        open={isOpen}
        onClose={onClose}
      >
        <NavbarMenu mode="vertical" />
      </Drawer>
    );
  }

  return (
    <NavbarMenu
      style={{ justifyContent: 'center', height: 50, gap: 16 }}
      mode="horizontal"
    />
  );
};
