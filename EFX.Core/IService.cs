﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace EFX.Core
{
    public interface IService
    {
        RootClass Root { get; set; }
        DbContext Context { get; set; }
    }
}