# Security Policy

This is a student prototype and is not designed or approved for safety-critical operation. Do not upload sensitive, personal, classified or restricted operational data.

## Reporting
Report reproducible defects or suspected exposure privately to the repository maintainer before publishing technical details. Remove credentials from logs and examples. Never commit API keys, service-account files or populated environment files.

## Current security limitations
The current app is browser-local and has no server-enforced authentication, authorization, persistent audit or external API secret management. Do not treat UI restrictions as security boundaries. Complete a separate security review before any hosted multi-user data is introduced.
