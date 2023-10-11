import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { message, Popconfirm } from 'antd';
import IcDelete from '../../components/icons/qldichvu-icons/IcDelete';
import IcUpdate from '../../components/icons/qldichvu-icons/IcUpdate';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#164E63',
    color: theme.palette.common.white,
    fontSize: 16
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const confirm = (e) => {
  console.log(e);
  // 
  message.success('Xóa thành công');
};


const QLDichVuContainer = () => {

  const [service, setService] = React.useState([
    { id: '1', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '2', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '3', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '4', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '5', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '6', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '7', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '8', name: 'Trung tâm thể dục', description: '...................................................'},
    { id: '9', name: 'Dịch vụ phòng', description: '...................................................'},
    { id: '10', name: 'Dịch vụ phòng', description: '...................................................'},
  ]);
  
  const [amentity, setAmentity] = React.useState([
    {id:'1', name:'Điều hòa nhiệt độ'},
    {id:'2', name:'Điều hòa nhiệt độ'},
    {id:'3', name:'Điều hòa nhiệt độ'},
    {id:'4', name:'Điều hòa nhiệt độ'},
    {id:'5', name:'Điều hòa nhiệt độ'},
    {id:'6', name:'Điều hòa nhiệt độ'},
    {id:'7', name:'Điều hòa nhiệt độ'},
  ]);

  const [serviceCount, setServiceCount] = React.useState(1);
  const [amentityCount, setAmentityCount] = React.useState(1);

  const handleIncrementServiceCount = () => {
    setServiceCount(serviceCount + 1);
  };

  const handleIncrementAmentityCount = () => {
    setAmentityCount(amentityCount + 1);
  };

  const [serviceOpen, setServiceOpen] = React.useState(false); // State for service dialog
  const [amentityOpen, setAmentityOpen] = React.useState(false); // State for amenity dialog
  
  // Service
  const handleClickOpenService = () => {
    setServiceOpen(true);
  };

  const handleCloseService = () => {
    setServiceOpen(false);
  };

  // add service
  const handleAddService = () => {
    setServiceOpen(false);
  };

  // update service
  const handleUpdateService = () => {
    setServiceOpen(false);
  };

  // Amentity
  const handleClickOpenAmentity = () => {
    setAmentityOpen(true);
  };

  const handleCloseAmentity = () => {
    setAmentityOpen(false);
  };

  // add amentity
  const handleAddAmentity = () => {
    setAmentityOpen(false);
  };

  // update amentity
  const handleUpdateAmentity = () => {
    setAmentityOpen(false);
  };
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="ml-80 text-2xl font-bold text-sky-900 mb-2">Dịch vụ</h2>
        <TableContainer component={Paper} className="mr-10">
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">Tên dịch vụ</StyledTableCell>
                <StyledTableCell align="left">Mô tả</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {service.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {serviceCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="left">{item.description}</StyledTableCell>
                  <StyledTableCell align="right"><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa dịch vụ"
                    description="Bạn có chắc chắc muốn xóa dịch vụ này không?"
                    onConfirm={confirm}
                    okText="OK"
                    cancelText="Hủy"
                  >
                  <StyledTableCell>
                    <button>
                      <IcDelete/>
                    </button>
                  </StyledTableCell>
                  </Popconfirm>
                  
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='mt-3'>
          <Button variant="outlined" onClick={handleClickOpenService}>
            Thêm dịch vụ
          </Button>
          <Dialog open={serviceOpen} onClose={handleCloseService}>
            <DialogTitle>Thêm dịch vụ</DialogTitle>
            <DialogContent >
              <DialogContentText>
              <TextField
                  style={{ marginTop: '8px', width: '550px' }}
                  label="Tên dịch vụ"
                  value={service.name}
                  // onChange={(e) => setService({ ...service, name: e.target.value })}
                />
                <br/>
                <TextField
                  style={{ marginTop: '15px', width: '550px' }}
                  label="Mô tả"
                  value={service.description}
                  // onChange={(e) => setService({ ...service, description: e.target.value })}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseService}>Hủy</Button>
              <Button onClick={handleAddService}>Thêm dịch vụ</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      <div>
        <h2 className="ml-40 text-2xl font-bold text-teal-800 mb-2">Tiện ích</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>STT</StyledTableCell>
                <StyledTableCell align="left">Tên tiện ích</StyledTableCell>
                <StyledTableCell align="right">Sửa</StyledTableCell>
                <StyledTableCell align="left">Xóa</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amentity.map((item, index) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {amentityCount + index}
                  </StyledTableCell>
                  <StyledTableCell align="left">{item.name}</StyledTableCell>
                  <StyledTableCell align="right"><button><IcUpdate/></button></StyledTableCell>
                  <Popconfirm
                    title="Xóa dịch vụ"
                    description="Bạn có chắc chắc muốn xóa tiện ích này không?"
                    onConfirm={confirm}
                    okText="Ok"
                    cancelText="Hủy"
                  >
                  <StyledTableCell><button><IcDelete/></button></StyledTableCell>
                  </Popconfirm>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className='mt-3'>
          <Button variant="outlined" onClick={handleClickOpenAmentity}>
            Thêm tiện ích
          </Button>
          <Dialog open={amentityOpen} onClose={handleCloseAmentity}>
            <DialogTitle>Thêm tiện ích</DialogTitle>
            <DialogContent>
            <TextField
                  style={{ marginTop: '8px', width: '550px' }}
                  label="Tên tiện ích"
                  value={amentity.name}
                  // onChange={(e) => setAmentity({ ...amentity, name: e.target.value })}
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAmentity}>Hủy</Button>
              <Button onClick={handleAddAmentity}>Thêm tiện ích</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default QLDichVuContainer;
