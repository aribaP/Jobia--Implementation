import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { candidate } from './entity/candidate.entity';
import { candidateCreateDto } from './dto/candidate-create.dto';
import { candidateUpdateDto } from './dto/candidate-update.dto';

@Injectable()
export class CandidateService {

    constructor(
        @InjectRepository(candidate)
        private candidateRepository: Repository<candidate>,

    ) { }

    getC(): Promise<candidate[]> {
        return this.candidateRepository.find();
    }

    createC(candCreateDto: candidateCreateDto) {
        return this.candidateRepository.save(candCreateDto);
    }

    updateC(candUpdateDto: candidateUpdateDto, candId: number ){
        return this.candidateRepository.update(candId, candUpdateDto);
    }

    showCByEmail(cndEmail: string): Promise<candidate> {
        return this.candidateRepository.findOne({where :{candEmail: cndEmail}});
        // return this.candidateRepository.createQueryBuilder().where('candEmail = :candEmail', { candEmail }).execute();
    
    }

    showCById(candId: number) {
        return this.candidateRepository.findOne({where :{candId}});
    }

    deleteC( candId: number ) {
        return this.candidateRepository.delete(candId);
    }
    
}
