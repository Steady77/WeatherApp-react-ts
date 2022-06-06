const Tab = ({ children, isSelected }: any) => {
    return (
        <>
            {isSelected &&
                <div>
                    {children}
                </div>
            }
        </>
    )
}

export default Tab