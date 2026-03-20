function generateCampaign(product, audience) {
  return `
Campaign for: ${product}
Audience: ${audience}

Output:
- 3 message hooks
- 1 email sequence structure
- 2 content angles
- 1 CTA flow
`;
}

// Example usage
console.log(generateCampaign("Supabase Launch Week", "Developers"));
