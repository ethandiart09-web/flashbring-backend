export function validate(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      // ✅ Renvoie juste les messages
      const messages = parsed.error.errors.map(e => e.message);
      return res.status(400).json({ error: messages });
    }
    req.validated = parsed.data;
    next();
  };
}
