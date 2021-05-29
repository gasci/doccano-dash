import { ExampleDTO, ExampleListDTO } from './exampleData'
import { ExampleRepository, SearchOption } from '~/domain/models/example/exampleRepository'
import { ExampleItem } from '~/domain/models/example/example'


export class ExampleApplicationService {
  constructor(
    private readonly repository: ExampleRepository
  ) {}

  public async list(projectId: string, options: SearchOption): Promise<ExampleListDTO> {
    try {
      const item = await this.repository.list(projectId, options)
      return new ExampleListDTO(item)
    } catch(e) {
      throw new Error(e.response.data.detail)
    }
  }

  public async fetchOne(projectId: string, page: string, q: string, isChecked: string, filterName: string): Promise<ExampleListDTO> {
    const offset = (parseInt(page, 10) - 1).toString()
    const options: SearchOption = {
      limit: '1',
      offset,
      q,
      isChecked,
      filterName
    }
    return await this.list(projectId, options)
  }

  public async create(projectId: string, item: ExampleDTO): Promise<ExampleDTO> {
    try {
      const doc = this.toModel(item)
      const response = await this.repository.create(projectId, doc)
      return new ExampleDTO(response)
    } catch(e) {
      throw new Error(e.response.data.detail)
    }
  }

  public async update(projectId: string, item: ExampleDTO): Promise<void> {
    try {
      const doc = this.toModel(item)
      await this.repository.update(projectId, doc)
    } catch(e) {
      throw new Error(e.response.data.detail)
    }
  }

  public bulkDelete(projectId: string, items: ExampleDTO[]): Promise<void> {
    const ids = items.map(item => item.id)
    return this.repository.bulkDelete(projectId, ids)
  }

  public async approve(projectId: string, docId: number, approved: boolean): Promise<void> {
    await this.repository.approve(projectId, docId, approved)
  }

  private toModel(item: ExampleDTO): ExampleItem {
    return new ExampleItem(
      item.id,
      item.text,
      item.meta,
      item.annotationApprover,
      item.commentCount,
      item.fileUrl
    )
  }
}
