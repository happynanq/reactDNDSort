import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
const ListItem = (props)=>{
  const [{isDragging}, drag] = useDrag({
    item:{type:"list"},
    // previewOptions:{offsetX:1100, offsetY:100} , // Хз почему не работает
    // canDrag:false, // можно ли перетаскивать
    collect: m =>({
      isDragging : !!m.isDragging()
    }),
    begin:(m)=>{
      console.log("Begin");
      // console.log(m.internalMonitor.store.getState()); // m имеет свой редаксовский стейт
    },
    end:()=>{
      console.log("end")
    }
  })
  const [{ isOver, canDrop },drop] = useDrop({
    accept : "list",
    drop:()=>console.log("wewe"),
    collect:(m)=>({
      isOver:!!m.isOver(),
      canDrop : !!m.canDrop()
    })
  })
  return(
    <>
      <div className="row blue lighten-2" ref={drag} >
        <div className="col s11">{props.todo}</div>
        <div className="col s1">{props.id}</div>
      </div>
      <div ref={drop}>
        drop
      </div>
    </>
  )
}
export default ListItem