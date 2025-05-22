## Limitations

- The Redux reducer `src/features/session` does not (and should not!) implement
  a real client-side session! Do not use this as the basis for authenticated state
  or operations belonging to a real session.
- Prettier (by analogy to Black) is installed, and can be used in an editor, but
  is not enforced at commit-time or in CI.
