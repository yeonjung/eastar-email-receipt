import type { Meta, StoryObj } from '@storybook/react';
import { textStyle, fontWeight } from '../../tokens/typography';

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Typography

**Source**: Figma > Foundation > General_Typography

Text style scale based on Figma specifications:
- Display: 36px (Display-100), 28px (Display-200)
- Heading: 24px, 22px, 20px, 18px
- Body: 16px, 14px
- Caption: 12px
- Label: 11px

Font: **Pretendard** (Korean web font)
Line heights: **125%** for display/heading, **150%** for body
        `,
      },
    },
  },
};

export default meta;

const SAMPLE_TEXT = '이스타항공으로 떠나는 즐거운 여행';
const SAMPLE_EN = 'Fly with Eastar Jet';

export const TextStyles: StoryObj = {
  name: 'All Text Styles',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {Object.entries(textStyle).map(([name, style]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '24px',
            padding: '12px 0',
            borderBottom: '1px solid #F5F5F5',
          }}
        >
          <div style={{ width: '200px', flexShrink: 0 }}>
            <code style={{ fontSize: '11px', color: '#9E9E9E', fontFamily: 'monospace' }}>{name}</code>
            <div style={{ fontSize: '11px', color: '#BDBDBD', marginTop: '2px' }}>
              {style.fontSize} / {
                Object.entries(fontWeight).find(([, v]) => v === style.fontWeight)?.[0]
              }
            </div>
          </div>
          <div style={{ ...style, color: '#212121', fontFamily: "'Pretendard', sans-serif" }}>
            {SAMPLE_TEXT}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const DisplayScale: StoryObj = {
  name: 'Display Scale',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {['display-100-bold', 'display-200-bold', 'heading-1-bold', 'heading-2-bold', 'heading-3-bold', 'heading-4-bold'].map((name) => {
        const style = textStyle[name as keyof typeof textStyle];
        return (
          <div key={name} style={{ ...style, color: '#212121', fontFamily: "'Pretendard', sans-serif" }}>
            {SAMPLE_EN} — {name}
          </div>
        );
      })}
    </div>
  ),
};
