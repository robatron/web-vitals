import {Metric, MetricRatingThresholds} from '../types.js';

/** The defined rating thresholds of each metric */
const metricRatingThresholds: Record<Metric['name'], MetricRatingThresholds> = {
  // https://web.dev/cls/#what-is-a-good-cls-score
  'CLS': {
    good: 0.1,
    needsImprovement: 0.25,
  },
  // https://web.dev/fcp/#what-is-a-good-fcp-score
  'FCP': {
    good: 1800,
    needsImprovement: 3000,
  },
  // https://web.dev/fid/#what-is-a-good-fid-score
  'FID': {
    good: 100,
    needsImprovement: 300,
  },
  // https://web.dev/inp/#what-is-a-good-inp-score
  'INP': {
    good: 200,
    needsImprovement: 500,
  },
  // https://web.dev/lcp/#what-is-a-good-lcp-score
  'LCP': {
    good: 2500,
    needsImprovement: 4000,
  },
  // https://web.dev/ttfb/#what-is-a-good-ttfb-score
  'TTFB': {
    good: 800,
    needsImprovement: 1800,
  },
};

/**
 * Get the thresholds of a metric's "good", "needs improvement", and "poor"
 * ratings, formatted as `MetricRatingThresholds`:
 *
 * | Metric value                      | Rating              |
 * |-----------------------------------|---------------------|
 * | ≦ `good`                          | "good"              |
 * | > `good` and ≦ `needsImprovement` | "needs improvement" |
 * | > `needsImprovement`              | "poor"              |
 *
 * @Example
 * ```ts
 * getMetricRatingThresholds('CLS') → {good: 0.1, needsImprovement: 0.25}
 * ```
 * @returns The metric's rating thresholds or `null` if `metricName is invalid
 */
export const getMetricRatingThresholds = (
  metricName: Metric['name']
): MetricRatingThresholds | null => {
  try {
    // Return a copy to prevent changes
    const {good, needsImprovement} = metricRatingThresholds[metricName];
    return {good, needsImprovement};
  } catch (e) {
    // Return null for invalid metric names
    return null;
  }
};
