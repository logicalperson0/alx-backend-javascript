import { RowID, RowElement} from './interface';

function insertRow(row: RowElement): number;
function deleteRow(rowID: RowID): void;
function updateRow(rowId: RowID, row: RowElement): number;