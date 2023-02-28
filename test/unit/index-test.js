import {describe, it} from 'node:test';
import assert from 'assert';
import {
  onCLS,
  onFCP,
  onFID,
  onINP,
  onLCP,
  onTTFB,
  getMetricRatingThresholds,
} from 'web-vitals';

describe('index', () => {
  it('exports Web Vitals metrics functions', () => {
    [onCLS, onFCP, onFID, onINP, onLCP, onTTFB].forEach((onFn) =>
      assert(typeof onFn === 'function')
    );
  });

  it('exports Web Vitals metric rating thresholds', () => {
    const expectedRatingThresholds = {
      'CLS': {
        good: 0.1,
        needsImprovement: 0.25,
      },
      'FCP': {
        good: 1800,
        needsImprovement: 3000,
      },
      'FID': {
        good: 100,
        needsImprovement: 300,
      },
      'INP': {
        good: 200,
        needsImprovement: 500,
      },
      'LCP': {
        good: 2500,
        needsImprovement: 4000,
      },
      'TTFB': {
        good: 800,
        needsImprovement: 1800,
      },
    };

    const actualRatingThresholds = {};
    ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'].forEach((metric) => {
      actualRatingThresholds[metric] = getMetricRatingThresholds(metric);
    });

    assert.deepEqual(actualRatingThresholds, expectedRatingThresholds);
  });
});
