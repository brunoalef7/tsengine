export interface GameEntity {
    update: (deltaTime: number) => void;
    resize?: () => void;
}