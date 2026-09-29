// Keep the existing CRM payload while keeping its API key on the server.
export async function POST(request) {
  const url = process.env.CRM_API_URL || process.env.NEXT_PUBLIC_CRM_API_URL;
  const key = process.env.CRM_API_KEY || process.env.NEXT_PUBLIC_CRM_API_KEY;
  if (!url || !key) return Response.json({ message: 'CRM integration is not configured.' }, { status: 503 });
  try {
    const body = await request.text();
    if (body.length > 12_000_000) return Response.json({ message: 'Request too large.' }, { status: 413 });
    const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': key }, body, signal: AbortSignal.timeout(20000) });
    return new Response(await response.text(), { status: response.status, headers: { 'Content-Type': response.headers.get('content-type') || 'application/json' } });
  } catch { return Response.json({ message: 'Unable to send enquiry. Please try again.' }, { status: 502 }); }
}
