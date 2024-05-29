import {Input, Modal, Row, Select} from "@iqueue/ui-kit";
import {createData} from "../../fetch/createData";
import {updateData} from "../../fetch/updateData";
import {deleteUser} from "../../fetch/deleteData";

function UserModal({item, userId ,addOpen, addClose, editOpen, editClose}) {
  return (
    <>
      <Modal
        key={userId}
        title={userId ? "Edit User" : "Add User"}
        isOpened={userId ? editOpen : addOpen}
        onClose={userId ? () => editClose(false) : () => addClose(false)}
        footerActions={[
          {
            title: userId ? "Delete" : "Close",
            danger: true,
            onClick: userId ? () => deleteUser(userId, editClose) : null
          },
          {
            title: userId ? "Save" : "Add",
            primary: true,
            submit: true,
          }]}
        onApply={userId ? updateData : createData}
      >
        <Row>
          {userId ? <Input name="id" value={userId} hidden/> : null}
          <Input
            type={'text'}
            value={userId ? item.firstName : ''}
            size={6}
            placeholder={'First Name'}
            name="firstName"
            required
          />
          <Input
            type={'text'}
            value={userId ? item.lastName : ''}
            size={6}
            placeholder={'Last Name'}
            name="lastName"
          />
          <Select
            value={userId ? item.gender : ''}
            placeholder={'Gender'}
            name="gender"
            size={4}
            entries={['male', 'female', 'other']}
            render={(a) => {
              return {
                key: a,
                title: a,
              }
            }}
          />
        </Row>
        {userId ?
          null :
          <Row>
            <Input
              type={'number'}
              size={4}
              placeholder={'Event Attendance'}
              name="eventAttendance"
            />
            <Input
              type={'number'}
              size={4}
              placeholder={'Dinner Party'}
              name="dinnerParty"
            />
            <Input
              type={'number'}
              size={4}
              placeholder={'Coffee Break'}
              name="coffeeBreak"
            />
            <Input
              type={'number'}
              size={4}
              placeholder={'Others'}
              name="others"
            />
          </Row>
        }
      </Modal>
    </>
  )
}

export default UserModal;
