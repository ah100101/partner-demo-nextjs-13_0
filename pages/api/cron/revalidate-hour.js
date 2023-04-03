export default async function handler(req, res) {
  // Commenting out token validation for demo purposes
  // if (req.query.secret !== process.env.ON_DEMAND_REVALIDATE_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  try {
    await res.revalidate('/cron/hour')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}