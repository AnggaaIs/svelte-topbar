import { beforeEach, describe, expect, mock, test } from 'bun:test';

const nprogress = {
  start: mock(() => 'started'),
  done: mock((force?: boolean) => force ? 'forced' : 'done'),
  remove: mock(() => undefined),
  set: mock((value: number) => value),
  inc: mock((amount?: number) => amount ?? 0.1),
  trickle: mock(() => 'trickled'),
  isStarted: mock(() => true),
  isRendered: mock(() => true),
  getPositioningCSS: mock(() => 'translate3d' as const)
};

mock.module('nprogress', () => nprogress);
const { createTopLoader } = await import('../src/controller');

describe('createTopLoader', () => {
  beforeEach(() => {
    for (const fn of Object.values(nprogress)) fn.mockClear();
  });

  test('delegates its actions to nprogress', () => {
    const loader = createTopLoader();

    loader.start();
    loader.done(true);
    loader.remove();
    loader.setProgress(0.5);
    loader.inc(0.2);
    loader.trickle();

    expect(nprogress.start).toHaveBeenCalledTimes(1);
    expect(nprogress.done).toHaveBeenCalledWith(true);
    expect(nprogress.remove).toHaveBeenCalledTimes(1);
    expect(nprogress.set).toHaveBeenCalledWith(0.5);
    expect(nprogress.inc).toHaveBeenCalledWith(0.2);
    expect(nprogress.trickle).toHaveBeenCalledTimes(1);
  });

  test('returns nprogress state and positioning queries', () => {
    const loader = createTopLoader();

    expect(loader.isStarted()).toBe(true);
    expect(loader.isRendered()).toBe(true);
    expect(loader.getPositioningCSS()).toBe('translate3d');
  });
});
