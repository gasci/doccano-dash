import { ParseRepository } from '~/domain/models/upload/parseRepository'

export class ParseApplicationService {
  constructor(
    private readonly repository: ParseRepository
  ) {}

  public async analyze(projectId: string, format: string, uploadIds: number[], option: object): Promise<string> {
    const item = await this.repository.analyze(projectId, format, uploadIds, option)
    return item
  }

  public revert(serverId: string): void {
    this.repository.revert(serverId)
  }
}
