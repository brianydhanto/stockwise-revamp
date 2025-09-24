
export const Header = () => {  
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="floating-bar gap-4">
          <div className="self-center text-xl cursor-pointer">STOCKWISE</div>
          <div className="self-center flex gap-6">
            <div>
              <button className="btn-primary cursor-pointer text-nowrap">JOIN NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}