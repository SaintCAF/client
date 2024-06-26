import '@testing-library/jest-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { render, screen } from '@app/tests';

import { General } from './General';

describe('Renders the General component', () => {
  beforeEach(() => {
    const scrollToMock = vi.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock });
    render(<General />);
  });

  it('should be wrapper', () => {
    expect(screen).toBeTruthy();
  });
});
