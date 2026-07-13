
## architecture, prefer deep modules.

Do:
```
module/
├── index.ts
└── internals/
    ├── types.ts
    ├── constants.ts
    └── implementation/*
```
- `index.ts` is the only public interface.
- `internals/*` contains the implementation.
- Callers import only from the module root.
- Enforce the boundary through tooling.

## implementation, apply YAGNI and SSOT.
- Keep knowledge near its owner.
- Apply DRY only to duplicated knowledge.