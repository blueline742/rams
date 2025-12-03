import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// NOTE: In a real app, use process.env.STRIPE_SECRET_KEY
// For this demo, we'll assume the user will provide it or we use a test key if available.
// I'll use a placeholder that will fail if not replaced, prompting the user to add it.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-11-17.clover' as any, // Cast to any to avoid strict type checking issues if types are mismatched
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { trade } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `RAMS Document - ${trade}`,
              description: 'Instant PDF Download',
            },
            unit_amount: 1299, // £12.99
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
