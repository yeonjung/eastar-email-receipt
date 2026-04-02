import type { Meta, StoryObj } from '@storybook/react';
import { spacing, buttonHeight } from '../../tokens/spacing';

const meta: Meta = {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Spacing Scale

**Source**: Figma > Element

4px 기반 스케일. 버튼 높이 등 주요 컴포넌트 크기도 이 스케일을 따릅니다.

\`var(--spacing-{n})\` 형태로 CSS Custom Property 사용.
        `,
      },
    },
  },
};
export default meta;

export const Scale: StoryObj = {
  name: 'Spacing Scale',
  render: () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h3 style={{ fontSize: 13, color: '#9E9E9E', marginBottom: 16, fontWeight: 500 }}>Base Unit: 4px</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {(Object.entries(spacing) as [string, string][]).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <code style={{ width: 100, fontSize: 12, color: '#9E9E9E', fontFamily: 'monospace', flexShrink: 0 }}>
              spacing[{key}]
            </code>
            <div
              style={{
                height: 20,
                width: value,
                backgroundColor: '#FF6600',
                borderRadius: 2,
                flexShrink: 0,
                maxWidth: 300,
              }}
            />
            <span style={{ fontSize: 12, color: '#616161' }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ButtonHeights: StoryObj = {
  name: 'Button Height Map',
  render: () => (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h3 style={{ fontSize: 13, color: '#9E9E9E', marginBottom: 16, fontWeight: 500 }}>
        Source: Figma Button page — size guide
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
        {(Object.entries(buttonHeight) as [string, string][]).map(([size, height]) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <code style={{ width: 80, fontSize: 12, color: '#9E9E9E', fontFamily: 'monospace', flexShrink: 0 }}>{size}</code>
            <div
              style={{
                height,
                minWidth: 120,
                backgroundColor: '#FF6600',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {height}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
