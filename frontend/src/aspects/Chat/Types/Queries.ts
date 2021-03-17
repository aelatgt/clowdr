import type { Maybe } from "./Base";

export interface Query<T> {
    data: Maybe<T>;
    loading: boolean;
}

export interface MutableQuery<T, M = T> extends Query<T> {
    mutate: Maybe<(value: M) => Promise<void>>;
}
