import Student from '@modules/students/infra/typeorm/entities/Student';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('gyms')
export default class Gym {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  identifier: string;

  @Column()
  document: string;

  @ManyToMany(() => Student, student => student.gyms)
  @JoinTable({
    name: 'gyms_students',
    joinColumn: { name: 'gym_id' },
    inverseJoinColumn: { name: 'student_id' },
  })
  students: Student[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
