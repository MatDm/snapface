import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Haze',
            description: 'Last trip to the Black Forest',
            imageUrl: "assets/forest.jpg",
            createdDate: new Date(),
            snaps: 200,
            location: 'Black Forest'
        },
        {
            id: 2,
            title: 'Desert',
            description: 'Lonely house in the middle of nowhere',
            imageUrl: 'assets/desert.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Nevada'
        },
        {
            id: 3,
            title: 'Storm',
            description: 'Nice storm and scary beach',
            imageUrl: 'assets/beach.jpg',
            createdDate: new Date(),
            snaps: 0
        }
    ];

    getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--; 
    }

    
    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap){
            throw new Error('FaceSnap not found!');
        }
        else{
            return faceSnap;
        }
    }
}