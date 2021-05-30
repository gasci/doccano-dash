export interface AuthRepository {
  register(username: string, password1: string, password2: string, email: string): Promise<void>

  login(username: string, password: string): Promise<void>

  logout(): Promise<void>
}
