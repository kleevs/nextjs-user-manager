CREATE TABLE [UserManager].[User] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Email]        NVARCHAR (50)  NOT NULL,
    [Password]     NVARCHAR (100) NOT NULL,
    [IsActive]     BIT            NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);