import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// データベースのテーブルを定義する
@Entity('users')
export class User {
  // 主キーを定義する
  @PrimaryGeneratedColumn({
    comment: 'アカウントID',
  })
  readonly id: number;

  // カラムを定義する
  @Column('varchar', { comment: 'アカウント名' })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
