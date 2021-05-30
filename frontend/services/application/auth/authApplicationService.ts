import { AuthRepository } from '~/domain/models/auth/authRepository'

export class AuthApplicationService {
  constructor(
    private readonly repository: AuthRepository
  ) {}

  public async login(username: string, password: string) {
    await this.repository.login(username, password)
  }

  public async register(username: string, password1: string, password2: string, email: string) {
    await this.repository.register(username, password1, password2, email)
  }

  public async logout() {
    await this.repository.logout()
  }
}
