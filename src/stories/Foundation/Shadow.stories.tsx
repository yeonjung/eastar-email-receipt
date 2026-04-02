import type { Meta, StoryObj } from '@storybook/react';
import { shadow } from '../../tokens/shadow';
import { radius } from '../../tokens/radius';

const meta: Meta = {
  title: 'Foundation/Shadow & Radius',
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'subtle' },
    docs: {
      description: {
        component: `
# Shadow & Border Radius

**Source**: Figma > Foundation > General_Shadow / Element

그림자는 \`var(--shadow-{level})\`, 반지름은 \`var(--radius-{level})\` 형태로 사용합니다.
        `,
      },
    },
  },
};
export default meta;

export const ShadowScale: StoryObj = {
  name: 'Shadow Scale',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, padding: 24, fontFamily: 'sans-serif' }}>
      {(Object.entries(shadow) as [string, string][]).filter(([, v]) => v !== 'none').map(([name, value]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
              boxShadow: value,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <code style={{ fontSize: 11, color: '#9E9E9E', fontFamily: 'monospace' }}>shadow-{name}</code>
        </div>
      ))}
    </div>
  ),
};

export const RadiusScale: StoryObj = {
  name: 'Border Radius Scale',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24, fontFamily: 'sans-serif' }}>
      {(Object.entries(radius) as [string, string][]).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#FF6600',
              borderRadius: value,
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <code style={{ fontSize: 11, color: '#9E9E9E', fontFamily: 'monospace', display: 'block' }}>radius-{name}</code>
            <span style={{ fontSize: 11, color: '#BDBDBD' }}>{value}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
