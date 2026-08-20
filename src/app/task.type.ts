export type Task = {
    id: string,
    title: string,
    description: string,
    author: string,
    status: 'todo' | 'in-progress' | 'done'
}
