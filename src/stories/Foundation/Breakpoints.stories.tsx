import type { Meta, StoryObj } from '@storybook/react';
import { breakpoints } from '../../tokens/breakpoints';

const meta: Meta = {
  title: 'Foundation/Breakpoints',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Breakpoints

**Source**: Figma > Foundation > Layout / Desktop 1920, 1280, 768

반응형 디자인 기준점. Figma 가이드에서 확인된 세 가지 데스크탑 뷰포트를 기반으로 합니다.

| 이름 | 값 | 용도 |
|---|---|---|
| mobile | 375px | 모바일 기준 |
| tablet | 768px | Figma: Layout / Desktop / 768 |
| desktop | 1280px | Figma: Layout / Desktop / 1280 |
| wide | 1920px | Figma: Layout / Desktop / 1920 |
        `,
      },
    },
  },
};
export default meta;

export const BreakpointScale: StoryObj = {
  name: 'Breakpoint Scale',
  render: () => {
    const colors: Record<string, string> = {
      mobile:  '#2196F3',
      tablet:  '#4CAF50',
      desktop: '#FF9800',
      wide:    '#9C27B0',
    };
    const maxWidth = 1920;
    return (
      <div style={{ fontFamily: 'sans-serif', padding: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(Object.entries(breakpoints) as [string, string][]).map(([name, value]) => {
            const px = parseInt(value);
            const pct = Math.min((px / maxWidth) * 100, 100);
            return (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 80, flexShrink: 0 }}>
                  <code style={{ fontSize: 12, color: colors[name], fontFamily: 'monospace', fontWeight: 700 }}>{name}</code>
                </div>
                <div style={{ flex: 1, position: 'relative', height: 32, backgroundColor: '#F5F5F5', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${pct}%`,
                      height: '100%',
                      backgroundColor: colors[name],
                      opacity: 0.7,
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: 8,
                      minWidth: 60,
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{value}</span>
                  </div>
                </div>
                <code style={{ fontSize: 11, color: '#9E9E9E', width: 200, flexShrink: 0 }}>
                  var(--breakpoint-{name})
                </code>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 32, padding: 16, backgroundColor: '#FFF3E0', borderRadius: 8, fontSize: 12, color: '#E65100' }}>
          💡 Figma 가이드 기준: <strong>768px (tablet)</strong>, <strong>1280px (desktop)</strong>, <strong>1920px (wide)</strong> 세 가지 뷰포트가 공통요소 가이드에 명시되어 있습니다.
        </div>
      </div>
    );
  },
};
