import type { Meta, StoryObj } from '@storybook/react';
import { colorPrimitive, colorSemantic } from '../../tokens/colors';

const meta: Meta = {
  title: 'Foundation/Color',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Color System

**Source**: Figma > Foundation > General_Color

3-layer architecture:
1. **Primitive** — Raw palette values (never use directly in components)
2. **Semantic** — Purpose-based aliases (use in components)
3. **Component** — Component-specific tokens (defined in \`tokens/colors.ts\`)
        `,
      },
    },
  },
};

export default meta;

const SwatchGrid = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <div style={{ marginBottom: '40px' }}>
    <h3 style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: '#212121' }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '8px' }}>
      {Object.entries(colors).map(([name, value]) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div
            style={{
              width: '100%',
              height: '48px',
              backgroundColor: value,
              borderRadius: '6px',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          />
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#616161' }}>{name}</div>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#9E9E9E' }}>{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Primitive: StoryObj = {
  name: 'Primitive Colors',
  render: () => <SwatchGrid title="Primitive Color Palette" colors={colorPrimitive as unknown as Record<string, string>} />,
};

export const Semantic: StoryObj = {
  name: 'Semantic Colors',
  render: () => <SwatchGrid title="Semantic Color Aliases" colors={colorSemantic as unknown as Record<string, string>} />,
};
