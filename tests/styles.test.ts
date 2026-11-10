import { describe, expect, test } from 'bun:test';
import { createTopLoaderStyles } from '../src/styles';

describe('createTopLoaderStyles', () => {
  test('uses default-position styles and the requested color', () => {
    const css = createTopLoaderStyles({ color: '#ff0000' });
    expect(css).toContain('background:#ff0000');
    expect(css).toContain('top:0');
    expect(css).toContain('height:3px');
    expect(css).toContain('z-index:1600');
  });

  test('supports bottom placement, custom height, z-index and shadow', () => {
    const css = createTopLoaderStyles({
      color: '#123456',
      height: 5,
      zIndex: 2000,
      showAtBottom: true,
      shadow: '0 0 4px #123456'
    });
    expect(css).toContain('bottom:0');
    expect(css).toContain('height:5px');
    expect(css).toContain('z-index:2000');
    expect(css).toContain('box-shadow:0 0 4px #123456');
  });

  test('can disable the shadow', () => {
    const css = createTopLoaderStyles({ color: '#123456', shadow: false });
    expect(css).not.toContain('box-shadow:');
  });
});
