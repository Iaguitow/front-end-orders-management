import { Flex, Segmented } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTheme } from '../hooks/contexts/themeContext';

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Flex gap="small" align="flex-start" vertical>
            <Segmented
                size="large"
                shape="round"
                value={theme}
                style={{border:"1px solid"}}
                options={[
                    { value: 'light', icon: <SunOutlined /> },
                    { value: 'dark', icon: <MoonOutlined /> },
                ]}
                onChange={toggleTheme}
            />
        </Flex>
    );
}


