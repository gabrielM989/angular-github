export interface ghRep extends Array<ghRep>{    
     
    name: string
    description: string
    html_url: string
    forks_count: number
    created_at: string
    updated_at: string
}