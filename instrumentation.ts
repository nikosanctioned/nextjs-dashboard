import { registerOTel } from '@vercel/otel';

export async function register() {
  console.log('WHATENV', process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation_node');
  }
}
