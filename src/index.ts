console.log("Let's simulate some airplanes!");

type Seat = string;
type IsleSpot = string;

class Airplane {
    seats: SeatRow[];
    isle: IsleSpot[];
    queue: IsleSpot[];

    constructor(rows: number, seatsPerRow: number, queue: string[]) {
        this.seats = Array.from({ length: rows }).map(
            (x, index) => new SeatRow(seatsPerRow, index),
        );
        this.isle = Array.from({ length: rows }).map(() => '..');
        this.queue = queue;
    }

    printAirplane() {
        const airplaneColumns: string[] = [...this.seats[0].seats.map(() => ''), ''];

        for (const isleSpot of this.isle) {
            airplaneColumns[0] += '_' + isleSpot;
        }
        for (const queueSpot of this.queue) {
            airplaneColumns[0] = '_' + queueSpot + airplaneColumns[0];
        }

        for (const row of this.seats) {
            for (const [index, seat] of row.seats.entries()) {
                airplaneColumns[index + 1] += '|' + seat;
            }
        }

        for (const {} of this.queue) {
            for (const index of this.seats[0].seats.keys()) {
                airplaneColumns[index + 1] = '   ' + airplaneColumns[index + 1];
            }
        }

        console.log(airplaneColumns.join('|\n') + '|');
    }
}

class SeatRow {
    seats: Seat[];
    id: string;

    constructor(seatsPerRow: number, rowNumber: number) {
        this.seats = Array.from({ length: seatsPerRow }).map(() => '..');
        this.id = String.fromCharCode(65 + rowNumber);
    }
}

const queue = ['A1', 'B1', 'C2', 'A2', 'D1'];
const airplane = new Airplane(4, 2, queue);
airplane.printAirplane();

console.dir(airplane.seats);
console.dir(airplane.queue);
