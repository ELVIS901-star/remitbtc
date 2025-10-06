# Service: <ServiceName>

## Responsibility
Service scope and responsibilities.

## Interface
```ts
export interface <ServiceName> {
  initialize(config: Config): Promise<void>;
  perform(input: Input): Promise<Result>;
}
```

## Configuration
- Required keys and secrets
- Environment variables

## Usage
```ts
import { create<ServiceName> } from '<package-or-path>';

const service = create<ServiceName>({ /* config */ });
await service.initialize();
const result = await service.perform({ /* input */ });
```
