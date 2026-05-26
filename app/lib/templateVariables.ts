const hiddenTemplateVariables = new Set(["company", "unsubscribe_link", "unsubscribe_url"]);

export function templateVariablesForDisplay(value: string | null | undefined) {
  try {
    const parsed = JSON.parse(value || "[]");
    if (!Array.isArray(parsed)) return [];
    const variables = parsed
      .map((name) => String(name) === "first_name" ? "full_name" : String(name))
      .filter((name) => name && !hiddenTemplateVariables.has(name));
    return Array.from(new Set(variables));
  } catch {
    return [];
  }
}
